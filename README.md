# 🌦️ Weather

A simple weather dashboard built with **Nx**, **Angular**, **Tailwind CSS**, **NgRx**, and the **OpenWeather API**.

---

## 🚀 Navigate to the right path

```bash
cd weather
```

## 🚀 Install Dependancies

```bash
npm install --legacy-peer-deps
```

## 🚀 Insert the environment file

- Unzip provided environments file
- Copy folder
- Paste folder under weather/apps/weather/src
- The path to the env file should then be under weather/apps/weather/src/environments/environment.ts

Note:
These files are untracked by github please do not publish the api key inside them

## 🚀 Run Locally

Start the development server for your app:

```bash
nx serve weather
```

## 🚀 Units used

- Tempreature: Degrees Celsius
- Wind speed: Meters a second

Note:
Originally I wanted to create a local setup where the user can specify these units.
Unfortuneatly I did not get to it.

## 🚀 Design Decisions

- I went for a darker more developer focused view.

## 🚀 Libraries

**Nx**
I wanted to use a nx structure as it facilitates a more modular design.
Components can be split up easily and imported almost anywhere.

**Tailwind CSS**
I used tailwind to easier apply styles to my components making it easier to add them inline then having to go inbetween files.

**NgRx**
I used ngrx state management to easily handle vast amounts of data and through the state easily be able to manage locations.
Originally I wanted to implement polling but just didnt get around to it.
With polling in mind the single source of truth would make it easier to refresh items in the backgraound and always having
the latest information at your fingertips
