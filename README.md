# Lahore Karting Lap Time Analysis 🏎️

### Sportzilla Last Time Analysis: 29th December 2025
### Apex Autodrome Last Time Analysis: 9th December 2025

**Lahore Karting Lap Time Analysis** is a comprehensive data-analysis system for karting lap times from Lahore's premier tracks. The system consists of Python-based data scraping and analysis tools, plus a modern Next.js dashboard for interactive visualization and leaderboards.

## 🚀 System Architecture

```
RaceFacer.com → Python Scraper → MongoDB Atlas → Next.js Dashboard → Users
                    (CSV)          (Cloud DB)      (Vercel)
```

## 📂 Project Structure

### Analysis & Scraping
- **Sportzilla/** — Sportzilla Formula Karting data and scrapers
  - `data_sportzilla.csv` — Current lap time data (3,590 drivers)
  - `sportzilla_scrapper.ipynb` — Selenium-based web scraper
  - `lap-analysis-sportzilla.ipynb` — Statistical analysis notebook
  - `lap-analysis-sportzilla.html` — Exportable analysis report

- **Apex Autodrome/** — Apex Autodrome data and scrapers
  - `data_apex.csv` — Current lap time data (1,783 drivers)
  - `apex_autodrome_scrapper.ipynb` — Selenium-based web scraper
  - `race-analysis-apex.ipynb` — Statistical analysis notebook
  - `race-analysis-apex.html` — Exportable analysis report

### MongoDB Integration (NEW)
- **scraper/** — MongoDB sync scripts
  - `sync_to_mongodb.py` — Main sync script (CSV → MongoDB)
  - `calculations.py` — Statistical calculations (z-scores, tiers, percentiles)
  - `requirements.txt` — Python dependencies
  - `.env.example` — Environment variable template
  - `README.md` — Setup and usage instructions

### Automation
- **.github/workflows/** — GitHub Actions
  - `scrape-and-sync.yml` — Scheduled scraping and MongoDB sync (every 6 hours)

## ✅ Features

### Analysis Features
- **Tier Classification**: S+ to D tier system based on z-score analysis
- **Statistical Insights**: Percentiles, gaps, intervals, and battle zones
- **Visualizations**: Time distributions, competition curves, trend analysis
- **Historical Tracking**: Record progression and performance evolution

### Dashboard Features (karting-dashboard repo)
- **Interactive Leaderboards**: Real-time rankings with search and filters
- **Data Visualizations**: Time distribution histograms and tier charts
- **Track Statistics**: World records, percentiles, median times
- **Responsive Design**: Mobile-first dark racing theme
- **Real-time Updates**: Automatic data sync every 6 hours

## 🛠️ Setup

### Prerequisites
- Python 3.10+
- MongoDB Atlas account (free tier)
- Node.js 18+ (for dashboard)

### 1. Install Python Dependencies

```bash
pip install -r scraper/requirements.txt
```

### 2. Configure MongoDB

1. Create MongoDB Atlas account and cluster
2. Get connection string
3. Create `scraper/.env`:

```bash
cp scraper/.env.example scraper/.env
```

Edit `.env` and add your MongoDB URI:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/karting-analysis
```

### 3. Sync Data to MongoDB

```bash
python scraper/sync_to_mongodb.py
```

This will:
- Read CSV files from both tracks
- Calculate tiers, percentiles, and statistics
- Upload data to MongoDB Atlas

### 4. Set Up Dashboard

See the [karting-dashboard](../karting-dashboard) repository for Next.js setup and deployment instructions.

## 📊 Analysis Notebooks

The Jupyter notebooks provide in-depth statistical analysis:

- **Tier System**: S+ (Alien), S (Elite), A (Pro), B (Above Average), C (Average), D (Rookie)
- **Performance Metrics**: Z-scores, percentile rankings, gaps to P1
- **Competitive Analysis**: Battle zones, war zones, photo finishes
- **Visualizations**: Histograms, KDE curves, competition curves

To run analysis:

```bash
jupyter notebook Sportzilla/lap-analysis-sportzilla.ipynb
```

## 🔄 Automated Updates

GitHub Actions automatically:
1. Scrapes RaceFacer every 6 hours
2. Updates CSV files
3. Syncs new data to MongoDB
4. Dashboard reflects changes immediately

Configure GitHub Secrets:
- `MONGODB_URI`: Your MongoDB connection string

## 📦 Data Format

CSV Structure:
```csv
Position,Name,Date,Max km/h,Max G,Best Time,Profile URL
1,Ammar Hassan,27.12.2025,65,3.4,01:01.518,https://www.racefacer.com/...
```

## 🚀 Deployment

For complete deployment instructions, see [DEPLOYMENT.md](../karting-dashboard/DEPLOYMENT.md) in the dashboard repository.

Quick overview:
1. Set up MongoDB Atlas cluster
2. Run initial data sync
3. Deploy dashboard to Vercel
4. Configure GitHub Actions for automatic updates

## 🔧 Tier Calculation

Tiers are assigned based on z-scores:

| Tier | Name | Z-Score | Description |
|------|------|---------|-------------|
| S+ | Alien | < -1.5 | Exceptional, world-class |
| S | Elite | -1.5 to -1.0 | Elite performance |
| A | Pro | -1.0 to -0.5 | Professional level |
| B | Above Average | -0.5 to 0.0 | Above average |
| C | Average | 0.0 to 0.5 | Average performance |
| D | Rookie | ≥ 0.5 | Beginner/Rookie |

## 👤 Author & Credits

Created by Vroslmend and Kensu

Dashboard and MongoDB integration by Claude Code

Data sourced from [RaceFacer](https://www.racefacer.com)
