# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/160acf3d-82a0-4a7d-a173-493a268b075a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/160acf3d-82a0-4a7d-a173-493a268b075a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/160acf3d-82a0-4a7d-a173-493a268b075a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

# SEO & Tracking Scripts Management

This project includes a comprehensive solution for managing third-party SEO and tracking scripts across the entire website.

## 📁 Script Management System

### Files Structure:
- `src/config/scripts.ts` - Configuration for all tracking scripts
- `src/hooks/useScriptManager.ts` - Custom hook for script loading logic
- `src/components/ScriptManager.tsx` - React component for script management
- Integration in `src/App.tsx` - Global script loading

### ✅ Included Scripts:

1. **Google Tag Manager (GTM)** - Active
2. **Adobe Analytics** - Active  
3. **InLinks SEO** - Active
4. **Hotjar Analytics** - Inactive (configurable)
5. **Schema.org Structured Data** - Active
6. **Microsoft Clarity** - Inactive (configurable)

### 🔧 Configuration

Edit `src/config/scripts.ts` to:
- Add new scripts
- Enable/disable existing scripts
- Modify script priorities
- Update script URLs or content

```typescript
// Example: Adding a new script
{
  id: 'new-script',
  name: 'New Tracking Script',
  src: 'https://example.com/script.js',
  async: true,
  active: true,
  priority: 7,
}
```

### 🚀 Key Features:

- **Asynchronous Loading**: All scripts load non-blocking
- **Priority-based**: Scripts load in order of priority
- **Error Handling**: Failed scripts don't break the site
- **Duplicate Prevention**: Scripts only load once
- **Easy Configuration**: Simple toggle system
- **Console Logging**: Track which scripts are loading

### 📝 How to Add New Scripts:

1. Open `src/config/scripts.ts`
2. Add your script configuration to the `SCRIPT_CONFIGS` array
3. Set `active: true` to enable
4. Choose appropriate priority (lower numbers load first)

### 🎯 SEO Best Practices:

- Scripts are loaded asynchronously (`async: true`)
- Structured data is included for better SEO
- Error handling prevents script failures from affecting site performance
- Priority loading ensures critical scripts load first

### 🔍 Monitoring:

Check browser console for script loading status:
- ✅ "Successfully loaded script: [Script Name]"
- ⚠️ "Failed to load script: [Script Name]" 
- 📝 "Loading script: [Script Name] (Priority: X)"

---

## 💡 Usage Notes:

Remember to update the placeholder IDs in script configurations:
- Replace `GTM-XXXXXX` with your actual GTM container ID
- Replace `YOUR_ADOBE_PROPERTY_ID` with your Adobe property ID
- Replace `YOUR_HOTJAR_ID` and `YOUR_CLARITY_ID` with actual IDs

The system automatically applies to all pages throughout the site via the global App component.
