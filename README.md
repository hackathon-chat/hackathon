# Hackathon.chat 🚀

**Hackathon.chat** is an open-source platform dedicated to collecting and showcasing global tech events, providing developers, entrepreneurs, and tech enthusiasts with a centralized hub for event information.

## 🎯 Mission

- **Global Tech Event Aggregator**: Collect hackathons, tech conferences, innovation summits, and other tech events from around the world
- **Developer-Friendly**: Simplified contribution process that allows community members to easily add events
- **Diverse Coverage**: Covers multiple tech domains including AI, Blockchain, Big Data, Cloud Computing, Fintech, Gaming, IoT, and more
- **Regional Organization**: Events organized by regions (Americas, Asia, Europe, etc.) for easy local discovery

## 🌟 Features

- 📅 Time-sorted event listings
- 🏷️ Multi-dimensional tag classification (tech type, region)
- ⭐ Featured event recommendations
- 🔍 Smart filtering functionality
- 📱 Responsive design with mobile support

## 🤝 How to Contribute Events

### Step 1: Fork the Repository
Click the "Fork" button in the top-right corner to copy the project to your GitHub account.

### Step 2: Add Event Image
Upload the event image to the `public/images/` directory. Recommended size: 400×225 pixels. Use a descriptive filename based on the event name, e.g., `eth-vietnam-2025.png`

**Note**: If no image is uploaded or the image fails to load, the system will automatically use the default image (`/images/no-images.png`).

### Step 3: Create Event File and Fill Information
Create a new `.md` file in the `src/content/events/` directory. Use a descriptive filename based on the event name, e.g., `eth-vietnam-2025.md`

Use the following template to fill in event details:

```yaml
---
title: "Event Title"
startDate: 2025-08-09
location:
  city: "City Name"
  country: "Country Name"
url: "https://event-website-link"
image: "/images/event-image.png"  # Use the image file you uploaded in Step 2
featured: true
eventType: ["AI", "Web3.0"]  # Options: AI, Big Data, Cloud, Fintech, Gaming, IoT, Web3.0
region: "Asia"               # Options: Americas, Asia, Europe, Other
---
```

### Step 4: Submit Pull Request
1. Commit your changes to your forked repository
2. Create a Pull Request to the main repository
3. Wait for review and merge

## 📋 Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | ✅ | Event title |
| `startDate` | Date | ✅ | Start date (YYYY-MM-DD) |
| `location.city` | String | ✅ | Host city |
| `location.country` | String | ✅ | Host country |
| `url` | String | ✅ | Official event website |
| `image` | String | ✅ | Event image path |
| `featured` | Boolean | ✅ | Whether it's a featured event |
| `eventType` | Array | ✅ | Event type tags |
| `region` | String | ✅ | Geographic region |

### eventType Options
- `AI` - Artificial Intelligence
- `Big Data` - Big Data & Analytics
- `Cloud` - Cloud Computing
- `Fintech` - Financial Technology
- `Gaming` - Gaming & Entertainment
- `IoT` - Internet of Things
- `Web3.0` - Web3.0 & Blockchain

### region Options
- `Americas` - North & South America
- `Asia` - Asia & Pacific
- `Europe` - Europe & Africa
- `Other` - Other regions

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Contribution Guidelines

1. Ensure event information is accurate and up-to-date
2. Use clear and descriptive event titles
3. Provide valid official website links
4. Select appropriate event types and region tags
5. If including images, ensure good quality and proper dimensions

## 🤖 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: CSS
- **Deployment**: GitHub Pages
- **Content Management**: Markdown + Frontmatter

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Thanks to all developers and community members who contribute event information to Hackathon.chat!

---

**Let's build the world's most comprehensive tech event platform together!** 🌍✨
