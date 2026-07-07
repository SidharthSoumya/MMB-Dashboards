# Med Buddy Leads Dashboard

A beautiful, professional dashboard for tracking and analyzing your Med Buddy leads with powerful filtering capabilities.

## ⚡ Quick Setup

### Step 1: Publish Your Google Sheet (Already Done!)

Your sheet is already published. The dashboard is configured with your URL.

### Step 2: Deploy to GitHub Pages

```bash
cd leads-dashboard
git init
git add .
git commit -m "Med Buddy Leads Dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/medbuddy-leads-dashboard.git
git push -u origin main
```

Then in GitHub:
1. Go to your repository
2. **Settings → Pages**
3. Select **Deploy from a branch**
4. Choose branch: **main**, folder: **/ (root)**
5. Click **Save**

Your dashboard will be live at: `https://YOUR_USERNAME.github.io/medbuddy-leads-dashboard/`

## Features

### 📊 Key Metrics
- **Total Leads** - All-time lead count with weekly breakdown
- **Called** - Number of leads successfully contacted
- **High Interest** - Hot leads marked as HIGH interest
- **Follow-ups Due** - Overdue and upcoming follow-ups

### 📈 Interactive Charts
- **Daily Lead Trend** - Line chart showing lead volume over time
- **Interest Distribution** - Doughnut chart (High/Medium/Low/Not Set)
- **Lead Sources** - Horizontal bar chart of top sources
- **Lead Stages** - Bar chart of Attempted Call vs Called

### 🌊 Conversion Funnel
Visual funnel showing progression from Attempted Call → Called

### 🔍 Powerful Filters
Filter your data by:
- **Search** - Name, Contact number, or Lead ID
- **Lead Source** - Filter by specific source
- **Lead Stage** - Attempted Call or Called
- **Interest Level** - HIGH, MEDIUM, or LOW
- **Date Range** - From/To date pickers

### 📋 Recent Leads Table
- Last 20 leads with full details
- Color-coded badges for Stage and Interest
- Export to CSV functionality

### 🎨 Design Features
- Modern dark theme with glassmorphism
- Gradient accents and smooth animations
- Responsive design (mobile, tablet, desktop)
- Auto-refresh every 5 minutes

## Testing Locally

```bash
cd leads-dashboard
python3 -m http.server 8000
# Open http://localhost:8000
```

## Lead Data Columns

| Column | Description |
|--------|-------------|
| LEAD ID | Unique lead identifier (MMB-L-XXXX) |
| DATE RECEIVED | When the lead was received |
| CONTACT | Phone number |
| NAME (If Known) | Lead's name |
| AGE | Age (if provided) |
| LEAD SOURCE | Source of the lead |
| LEAD STAGE | Current stage (Attempted Call/Called) |
| TIME OF CALL | Call time |
| INTEREST | Interest level (HIGH/MEDIUM/LOW) |
| INITIAL INQUIRY/NOTES | Initial notes |
| LAST CONTACTED | Last contact date |
| Next Follow-up | Scheduled follow-up date |
| LAST CONVERSATION SUMMARY | Conversation notes |

## Technologies Used

- [Chart.js](https://www.chartjs.org/) - Data visualization
- [PapaParse](https://www.papaparse.com/) - CSV parsing
- Google Sheets Published CSV - Data source
- GitHub Pages - Hosting
- Inter & JetBrains Mono fonts - Typography

## Customization

### Change Colors

Edit the CSS variables in `<style>` section:

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-success: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
--gradient-warning: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-info: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

### Change Refresh Interval

Edit the `setInterval` at the bottom:

```javascript
setInterval(loadData, 5 * 60 * 1000); // 5 minutes
```

### Show More Rows in Table

Change the slice value:

```javascript
data.slice(-20) // Change -20 to -50 for more rows
```

## Troubleshooting

### "Failed to load data"
- Make sure your sheet is published (File → Share → Publish to web → CSV)
- Wait a minute after publishing
- Check the sheet is accessible

### Filters not working
- Wait for data to fully load first
- Check browser console for errors
- Try refreshing the page

### Charts not displaying
- Ensure you're not opening the file directly (use a server)
- Check browser console for JavaScript errors
- Clear browser cache

## License

MIT License - feel free to customize!
