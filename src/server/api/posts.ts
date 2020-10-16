import { RequestHandler } from 'express'
const posts = [{ "body": "People who DO \"get paid enough for this shit\", what's your job?" }, { "body": "We are Disinformation researchers who want you to be aware of the lies that will be coming your way ahead of election day, and beyond. Inoculate yourselves against the disinformation now! Ask Us Anything!" }, { "body": "On a galactic scale, amber and pearl are far rarer than gold and diamonds because they require life." }, { "body": "'Sadistic and Depraved': Trump Rejects California Request for Federal Disaster Aid to Recover From Catastrophic Wildfires." }, { "body": "Dave wins record for biggest recorder" }, { "body": "Osh declares his love for ECMA" }, { "body": "Riya has new glasses. Pin her vid feed to learn more" }, { "body": "Vanessa shuts down Rick's dev idea. He cries. Gets over it. She was probably right #winkyface" }, { "body": "Democratic presidential nominee Biden tests negative for COVID-19" }, { "body": "Rudy Giuliani Is My Father. Please, Everyone, Vote for Joe Biden and Kamala Harris." }]

export const postsHandler: RequestHandler = (_, res) => {
  res.status(200).json(posts)
}
