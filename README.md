# Todo App

A React Native Expo application for managing todos, with cross-platform support for iOS, Android, and Web.

## Features

- Full CRUD operations for todos
- Filter todos by status (Not Started, In Progress, Completed)
- Pagination support
- Cross-platform compatibility
- Responsive design
- Dark mode support

## Prerequisites

- Node.js 16+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS development)
- Android Studio & Android SDK (for Android development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/blingyplus/todo-expo-app.git
cd todo-expo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web browser
- `npm test` - Run tests
- `npm run build` - Build for web deployment
- `npm run serve` - Serve the web build locally

## Development

### Environment Configuration

The app connects to the Laravel backend API. Update the API URL in `app/services/api.ts`:

```typescript
const API_URL = "your-api-url";
```

### Project Structure

- `/app` - Main application code
  - `/components` - Reusable React components
  - `/services` - API and other services
  - `/styles` - Shared styles and theme
  - `/types` - TypeScript type definitions
  - `/utils` - Utility functions

### Testing

Run the test suite:
```bash
npm test
```

## Deployment

### Web Build

1. Create a production build:
```bash
npm run build
```

2. Deploy the `dist` directory to your web hosting service

The project includes a Railway configuration (`railway.toml`) for easy deployment to Railway.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Dependencies

Key packages include:
- Expo v52
- React Native v0.76
- React Navigation v7
- TypeScript
- Jest for testing

See `package.json` for the complete list of dependencies.