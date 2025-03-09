# Posthog Workshop

Workshop for å lære posthog.

# Oppsett

Legg inn .env-variabler, se .env.local.example. Legg til .env.local

## Kjør lokalt

Installér avhengigheter:

```bash
pnpm install
```

Kjør prosjektet lokalt:

```bash
pnpm dev
```

Åpne [http://localhost:3000](http://localhost:3000).

# Oppgaver

## Oppgave 1 - Lag ditt første event

I denne oppgaven setter vi opp posthog og du lager ditt første event.

### Oppgave 1a Oppsett

![Screenshot workshop](./images/signup.png)

Start med å klone repository. Så trenger du å legge inn PostHog- secrets. Da trenger du først en konto.

Gå inn på https://eu.posthog.com/signup og opprett en organisasjon, f.eks. "Hobby org".

Så huk av for "Product analysis", og trykk "Get started".

Trykk så inn på guide for "Nextjs", om det ikke allerede er gjort. Dette første steget med å sette opp provider har vi allerede ordnet for deg, se `PosthogProvider.tsx`. Men du kan gjerne lese gjennom for å forstå hva som foregår.

På denne første siden ser du også secrets for ditt posthog-prosjekt. Om du senere lurer på hvor de er, ta en titt på "Settings".

👉 Oppgave: Før du trykker deg videre på oppsett-siden, gjør følgende: Legg secrets inn på fil `env.local`, kjør opp prosjektet og trykk litt rundt.

Når "Verify installation" er good, kan du trykke videre til "Continue".

👉 Oppgave: Du kan konfigurere ting som om du vil ha på ting som autocapture og heatmaps. La alt unntatt autocapture være på. Vi kommer heller til å bruke manuelt event.

💡 Refleksjon: Hvorfor bruke manuelle events istedenfor automatiske?

📖 https://posthog.com/tutorials/event-tracking-guide#autocaptures-limitations

👉 Oppgave: Bruk gratis plan og hopp over å invitere teammedlemmer.

🎉 Du har nå satt opp Posthog. I Posthog-dashboardet, trykk deg inn på "Web analytics" og se om du har en session replay å titte på.

### Oppgave 1b - Ditt første event

![Screenshot workshop](./images/first_click.png)

Nå som vi har satt opp Posthog, er det lekende lett å tracke brukerens eventer.

👉 Oppgave: Track hvilke FAQ- spørsmål som brukere åpner. For å se om eventet har blitt sendt, kan du trykke inn på fanen "Activity".

📖 https://posthog.com/docs/getting-started/send-events

💡 Refleksjon:

- Hvilke events bør du minimum tracke?

📖 https://posthog.com/tutorials/next-steps-after-installing#1-configure-event-capture

- Hva må du gjøre annerledes om du vil tracke fra en serverkomponent versus klientkomponent?

📖 https://vercel.com/guides/posthog-nextjs-vercel-feature-flags-analytics#3.-using-posthog-with-react-server-components

## Oppgave 2 - Visualiser innsikt

### Oppgave 2a - Trender

![Screenshot workshop](./images/trend.png)

👉 Oppgave: Legg til en trend-annotasjon.

💡 Refleksjon: Hva er vits med å lage trender?

📖 https://www.bekk.christmas/post/2024/07/forsta-produktet-ditt-med-posthog-lag-innsikt-ut-av-malingene

### Oppgave 2b - Funnels

![Screenshot workshop](./images/funnel.png)

👉 Oppgave: Sett opp en funnel for skjemaet du finner oppe i høyre hjørne på nettsiden.

- I koden, legg inn et event per spørsmål i skjemaet
- I dashboard, legg inn action per steg

<details>
  <summary>Løsning dashboard</summary>

![Screenshot workshop](./images/funnel_solution.png)

</details>

💡 Refleksjon:

- Om du ser dropp i prosenter per steg, hva er det tegn på - og hva kan du eventuelt gjøre med det?
- Hvordan kan du bruke funnels sammen med retention?

📖 https://www.youtube.com/watch?v=2jQco8hEvTI&t=573s&ab_channel=PostHog

## Lag et dashboard

### Oppgave 3a - Lag et dashboard

![Screenshot workshop](./images/dashboard.png)

👉 Legg inn dashboardene du lagde i oppgave 2 inn på et nytt dashboard

💡 Refleksjon:

- Hva er gode praksiser så dashboardet blir oversiktlig?
- Om dette var et dashboard for ditt oppdrag, hva hadde du ønsket å ha med?

📖 https://www.bekk.christmas/post/2024/08/forsta-produktet-ditt-med-posthog-samle-innsikt-i-produkt-dashboard

# Ekstra oppgaver

## Identifisér brukeren

Legg til et skjema hvor brukeren kan skrive inn epost, og følg deretter brukeren for å identifisere hen. Se https://posthog.com/tutorials/identifying-users-guide og video https://youtu.be/LIJ_TuyMq74?si=fukxQhy67JZSjYPf&t=290

## Track uten behov for cookie-banner

Om du ikke vil lagre brukerens info i cookies, kan du flytte lagringen. Prøv det ut: https://posthog.com/tutorials/cookieless-tracking

## Test med posthog

Lag en test med Jest og Posthog: https://posthog.com/tutorials/test-frontend-feature-flags
