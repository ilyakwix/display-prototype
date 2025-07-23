import styles from "./live-preview.module.css";

export function LivePreview() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Live Preview</h2>
      <div className={styles.previewFrame}>
        <div className={styles.mockInterface}>
          <header className={styles.mockHeader}>
            <h1 className={styles.mockTitle}>Dashboard</h1>
            <nav className={styles.mockNav}>
              <a href="#" className={`${styles.mockNavItem} ${styles.active}`}>
                Overview
              </a>
              <a href="#" className={styles.mockNavItem}>
                Analytics
              </a>
              <a href="#" className={styles.mockNavItem}>
                Settings
              </a>
            </nav>
          </header>

          <div className={styles.mockContent}>
            <main className={styles.mockMain}>
              <div className={styles.mockCard}>
                <h3 className={styles.mockCardTitle}>Welcome Back!</h3>
                <p className={styles.mockCardText}>
                  This is a preview of how your theme customizations will look in a real interface. All elements update
                  in real-time as you make changes.
                </p>
                <button className={styles.mockButton}>Get Started</button>
              </div>

              <div className={styles.mockCard}>
                <h3 className={styles.mockCardTitle}>Recent Activity</h3>
                <p className={styles.mockCardText}>
                  Your latest updates and notifications will appear here. The styling adapts to your chosen theme
                  settings.
                </p>
                <button className={styles.mockButton}>View All</button>
              </div>
            </main>

            <aside className={styles.mockSidebar}>
              <div className={styles.mockWidget}>
                <h4 className={styles.mockWidgetTitle}>Quick Stats</h4>
                <ul className={styles.mockList}>
                  <li className={styles.mockListItem}>
                    Active Users
                    <span className={styles.mockBadge}>1,234</span>
                  </li>
                  <li className={styles.mockListItem}>
                    Total Revenue
                    <span className={styles.mockBadge}>$12.5K</span>
                  </li>
                  <li className={styles.mockListItem}>
                    Conversion Rate
                    <span className={styles.mockBadge}>3.2%</span>
                  </li>
                </ul>
              </div>

              <div className={styles.mockWidget}>
                <h4 className={styles.mockWidgetTitle}>Recent Updates</h4>
                <ul className={styles.mockList}>
                  <li className={styles.mockListItem}>Theme system updated</li>
                  <li className={styles.mockListItem}>New color options added</li>
                  <li className={styles.mockListItem}>Performance improvements</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
