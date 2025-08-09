import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import styles from './PortfolioList.module.scss'
import { allProjects } from '../../data/projects'

type SortKey = 'az' | 'za' | 'rand'

// IDs que SEMPRE ficam nas primeiras posições (na ordem definida aqui)
const PINNED_IDS = ['morada-dos-passaros', 'residencial-rivieira'] as const

function shuffle<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function PortfolioList() {
  const [q, setQ] = useState('')
  const [sort, setSort] = useState<SortKey>('az')

  const projects = useMemo(() => {
    const needle = q.trim().toLowerCase()

    // 1) filtro por busca
    let filtered = needle
      ? allProjects.filter(p => p.title.toLowerCase().includes(needle))
      : allProjects

    // 2) separa “fixados” que passaram no filtro (mantém a ordem do array PINNED_IDS)
    const pinnedInList = PINNED_IDS
      .map(id => filtered.find(p => p.id === id))
      .filter((p): p is (typeof allProjects)[number] => Boolean(p))

    // 3) resto (sem os fixados)
    let rest = filtered.filter(p => !PINNED_IDS.includes(p.id as any))

    // 4) ordenação/embaralhamento só do resto
    if (sort === 'az') rest = [...rest].sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'za') rest = [...rest].sort((a, b) => b.title.localeCompare(a.title))
    if (sort === 'rand') rest = shuffle([...rest])

    // 5) resultado final: fixados + resto
    return [...pinnedInList, ...rest]
  }, [q, sort])

  return (
    <>
      <Navbar />

      <div className={styles.page}>
        <div className={styles.bgFx} aria-hidden="true" />

        <main className={styles.container}>
          <header className={styles.header}>
            <div className={styles.headline}>
              <h1>Portfólio</h1>
              <p>Explore todas as obras e clique para ver os detalhes.</p>
            </div>

            <div className={styles.toolbar}>
              <div className={styles.searchWrap}>
                <svg className={styles.searchIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10.5 3a7.5 7.5 0 0 1 5.93 12.21l4.18 4.18-1.42 1.42-4.18-4.18A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/>
                </svg>
                <input
                  className={styles.search}
                  placeholder="Buscar por título…"
                  value={q}
                  onChange={e => setQ(e.target.value)}
                />
                {q && (
                  <button
                    type="button"
                    className={styles.clear}
                    onClick={() => setQ('')}
                    aria-label="Limpar busca"
                    title="Limpar"
                  >
                    ×
                  </button>
                )}
              </div>

              <div className={styles.spacer} />

              <div className={styles.count}>
                {projects.length} resultado{projects.length === 1 ? '' : 's'}
              </div>

              <label className={styles.sort}>
                <span>Ordenar:</span>
                <select value={sort} onChange={e => setSort(e.target.value as SortKey)}>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                  <option value="rand">Aleatória</option>
                </select>
              </label>
            </div>
          </header>

          {projects.length === 0 ? (
            <div className={styles.empty}>
              Nenhum resultado para <strong>{q}</strong>.
              <button onClick={() => setQ('')}>Limpar busca</button>
            </div>
          ) : (
            <section className={styles.grid}>
              {projects.map(p => (
                <Link key={p.id} to={`/portfolio/${p.id}`} className={styles.card}>
                  <img src={p.src} alt={p.title} loading="lazy" />
                  <div className={styles.scrim} />
                  <h3 className={styles.title}>{p.title}</h3>
                </Link>
              ))}
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  )
}
