import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import styles from './PortfolioList.module.scss'
import { allProjects } from '../../data/projects'

type SortKey = 'az' | 'za' | 'rand'

export default function PortfolioList() {
  const [q, setQ] = useState('')
  const [sort, setSort] = useState<SortKey>('az')

  const projects = useMemo(() => {
    const needle = q.trim().toLowerCase()

    let list = needle
      ? allProjects.filter(p => p.title.toLowerCase().includes(needle))
      : allProjects

    if (sort === 'az') list = [...list].sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'za') list = [...list].sort((a, b) => b.title.localeCompare(a.title))
    if (sort === 'rand') {
      list = [...list]
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[list[i], list[j]] = [list[j], list[i]]
      }
    }
    return list
  }, [q, sort])

  return (
    <>
      <Navbar />

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
    </>
  )
}
