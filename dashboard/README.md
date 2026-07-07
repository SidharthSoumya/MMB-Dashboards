# Med Buddy Inquiry Dashboard

A real-time dashboard for tracking your Med Buddy inquiry/leads data from Google Sheets.

## ⚡ Quick Setup

### Step 1: Publish Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1ySb0oOP0-rDEWDsWOXjaZPiWmrR9TPR4RfTcpiJEA1s/edit
2. Click **File → Share → Publish to web**
3. In the dialog that appears:
   - Select **Entire Document**
   - Select **Comma-separated values (.csv)**
4. Click **Publish**
5. Click **OK** to confirm

That's it! Your sheet is now ready. The dashboard will automatically fetch data from it.

### Step 2: Deploy to GitHub Pages

```bash
cd dashboard
git init
git add .
git commit -m "Med Buddy Inquiry Dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/medbuddy-dashboard.git
git push -u origin main
```

Then in GitHub:
1. Go to your repository
2. **Settings → Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose branch: **main**, folder: **/ (root)**
5. Click **Save**

Your dashboard will be live at: `https://YOUR_USERNAME.github.io/medbuddy-dashboard/`

## Features

- 📊 **Volume Metrics**: Total inquiries, weekly/monthly trends
- 📈 **Daily Trend Chart**: Visualize inquiry patterns over time
- 🏥 **Department Breakdown**: See which departments drive the most inquiries
- 🏨 **Hospital Analytics**: Top hospitals by patient volume
- 👥 **Age Group Distribution**: Understand your patient demographics
- 💼 **Service Analysis**: Which services are most requested
- 👔 **MB Assignment Tracking**: Case distribution across team members
- 💰 **Revenue Tracking**: MMB charges and hospital charges totals
- ⏱️ **Response Time**: Average days from inquiry to follow-up

## Auto-Refresh

- The dashboard automatically refreshes data every **5 minutes** when open
- Click the **Refresh** button to manually reload data
- Any changes you make to your Google Sheet will appear automatically

## How It Works

```
┌─────────────────┐                              ┌─────────────────┐
│  Google Sheet   │────── Published CSV ────────▶│   Dashboard     │
│  (Your Data)    │                              │  (GitHub Pages) │
└─────────────────┘                              └─────────────────┘
```

No middleman, no scripts - just direct CSV access from your published sheet.

## Sheet Columns

Your sheet already has the correct columns:

| Column | Description |
|--------|-------------|
| SL NO | Serial number |
| DATE | Inquiry date |
| PATIENT'S NAME | Patient name |
| AGE | Patient age |
| PATIENT CONTACT NO. | Contact number |
| ATTENDANT (if any) | Attendant name |
| ATTENDANT CONTACT NO. | Attendant contact |
| ADDRESS | Patient address |
| HOSPITAL | Hospital name |
| DEPARTMENT | Department name |
| DOCTOR | Doctor name |
| SERVICE | Service provided |
| MMB Charges | Med Buddy charges |
| Hospital Charges | Hospital charges |
| ASSIGNED MB | Assigned Med Buddy |
| LAST FOLLOW-UP | Follow-up date |
| NOTES | Additional notes |

## Metrics Explained

| Metric | Description |
|--------|-------------|
| **Total Inquiries** | All-time inquiry count |
| **This Week** | New inquiries in the last 7 days |
| **This Month** | New inquiries in current month |
| **Avg Response Time** | Average days from inquiry to first follow-up |
| **Total Revenue** | Sum of all MMB charges |
| **Hospital Charges** | Sum of all hospital charges |
| **Paid Cases** | Inquiries with non-zero MMB charges |

## Testing Locally

Before deploying to GitHub, test locally:

```bash
cd dashboard
python -m http.server 8000
# Open http://localhost:8000
```

## Troubleshooting

### "Failed to load data"
- Make sure you published the sheet as **CSV** (not "Web page")
- Wait a minute after publishing - Google needs time to generate the CSV
- Check the sheet is not private (anyone with link can view)

### Dashboard shows 0 records
- Check your sheet has data in the first column (SL NO)
- Make sure there are no completely empty rows at the top

### Charts not showing
- Wait for data to load (check browser console)
- Make sure you're not opening the file directly (use a local server or GitHub Pages)

## Technologies Used

- [Chart.js](https://www.chartjs.org/) - Data visualization
- [PapaParse](https://www.papaparse.com/) - CSV parsing
- Google Sheets GViz API - Direct CSV access
- GitHub Pages - Hosting

## License

MIT License - feel free to customize for your needs!
