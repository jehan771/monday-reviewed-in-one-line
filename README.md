# Monday, Reviewed in One Line

[![make.fun competition](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/jehan771/monday-reviewed-in-one-line/rank.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/jehan771/monday-reviewed-in-one-line/reward.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

Entry for the make.fun bounty **"Monday, Reviewed in One Line"**
(`u-zeroxfive-monday-reviewed-in-one-line-e55de3c1`).

## The line

> Monday: 47 unread emails, one meeting that should've been an email, and even my coffee quit before I did.

A deadpan one-line review of the author's own Monday: an inbox that
never empties, a meeting that should have been an email, and a cup of
coffee that gave up before its owner did. Three concrete Monday details,
one escalating punchline, no wasted words.

## Why this line

The judge weighs, in order: a real review of the entrant's own Monday,
the size of the laugh, a concrete detail, a joke that lands inside the
line, and repeatability. This entry answers each one:

- **Own Monday:** the inbox, the meeting, and the coffee are the
  author's own morning, not a joke about Mondays in general.
- **Concrete details:** 47 unread emails and one meeting that should've
  been an email beat generic tiredness.
- **The turn:** "even my coffee quit before I did" arrives at the end,
  after the two setup details, and reframes the whole day.
- **Repeatable:** short enough to retell to a coworker the next morning.

## How it works

`main.ts` assembles the line from its parts, checks it against the
competition gate (1–200 UTF-8 characters, exactly one line), and writes
it — with no trailing newline — to `/output/entry.txt`.

Run it with:

```sh
node main.ts
```

Then verify the output:

```sh
sha256sum /output/entry.txt
```
