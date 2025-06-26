```
# Toy Tracker

Toy Tracker is a simple application built with Angular 20 for managing a list of toys. It includes features for adding toys, viewing them in a list, and filtering by age and price. The application demonstrates reactive programming using BehaviorSubject for state sharing and custom pipes for filtering.

## Features

- Add new toys with a form
- Display a list of toys
- Filter toys by age and price using custom pipes
- Share data between components using a BehaviorSubject
- Navigation with fallback 404 page
- Modular and reusable UI components (navigation, footer)

## Components

- `add-toys`: Form component for submitting new toy entries
- `toy-list`: Displays all toys with filter functionality
- `nav`: Simple navigation bar for routing
- `footer`: Static footer component
- `page-not-found`: Handles undefined routes

## Pipes

- `filterByAge`: Filters the toy list based on age criteria
- `filterByPrice`: Filters the toy list based on price range

## Services

- `ToyService`: Manages toy data using a BehaviorSubject to enable reactive communication between components

## Technologies Used

- Angular 20
- RxJS
- TypeScript
- Angular CLI
- Bootstrap or Angular Material (optional for UI styling)

## Folder Structure

```
src/
├── app/
│   ├── components/
│   │   ├── add-toys/
│   │   ├── toy-list/
│   │   ├── nav/
│   │   ├── footer/
│   │   └── page-not-found/
│   ├── pipes/
│   │   ├── filter-by-age.pipe.ts
│   │   └── filter-by-price.pipe.ts
│   ├── services/
│   │   └── toy.service.ts
│   ├── models/
│   │   └── toy.model.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
```

## Getting Started

### Prerequisites

- Node.js and npm
- Angular CLI (`npm install -g @angular/cli`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/rahamath-codes/toy-tracker.git
cd toy-tracker
npm install
```

Start the development server:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200/`.

## Running Tests

```bash
ng test
```

## Building for Production

```bash
ng build --prod
```

## Contributing

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Push to your branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License.

Author: [@rahamath-codes](https://github.com/rahamath-codes)
```

