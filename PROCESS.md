# Development Process and AI Collaboration

This document records a few important exchanges from the development of Mood Seed. It is not a complete transcript. I selected these moments because they show how I used Codex, tested the project myself, and made design decisions based on what I observed.

## Git History

I saved the project at meaningful stages instead of making only one final commit.

| Stage | Commit | What it preserved |
| --- | --- | --- |
| Version 1 | `d5dd4ac` — Create first Mood Seed prototype | The first working mood-selection, watering, sprout, and message interaction |
| Version 2 | `5b38467` — Differentiate mood-based plant care and garden experience | Three visually different mood states, different amounts of care, gradual recovery, and the garden environment |
| Version 3 | `d3c7420` — Add repeat check-in flow and reflective messages | The completed-state reset flow and longer reflective messages |
| Documentation | `48dfa18` — Add project README and reflection | Instructions, selected prompts, testing history, and final reflection |

## Selected Exchange 1: Building a Small First Version

### My prompt

> I want to build the first version of my Mood Seed project. My initial idea is to create a small interactive browser experience based on the user's mood. The seed represents the user, and watering the seed represents giving yourself care.

I asked for a deliberately small project using beginner-friendly HTML, CSS, and JavaScript. I also asked Codex not to add extra features because I wanted to test the basic interaction before deciding what to revise.

### Codex's contribution

Codex created the first versions of `index.html`, `styles.css`, and `script.js`. It also explained how mood selection, the water button, the seed-to-sprout change, and the mood messages worked.

### My test and decision

I tested Version 1 in the browser. The interaction worked technically, but Okay, Sad, and Stressed felt almost the same. The main difference was the message, and the watering happened too quickly to feel like a meaningful moment of care.

## Selected Exchange 2: Making Each Mood Visually Meaningful

### My prompt after testing

> I tested Version 1 myself, and the basic interaction works, but it does not fully match my intention. Okay, Sad, and Stressed feel almost the same during the watering interaction. The main difference is the supportive message at the bottom. I expected the selected mood to affect the visual experience itself, not just the text.

I asked for Great, Okay, and Sad to have clearly different starting plant conditions, amounts of water, sunlight, and recovery times. I removed Stressed because I felt that it overlapped too much with Sad. I also specified that all moods should finish with a similarly healthy plant.

Before changing the code, I asked Codex to propose a plan. One important part of its response was:

> Version 2 should keep the same three-file structure but change the interaction from “seed becomes sprout” to “plant condition improves through care.”

Codex proposed using mood-specific CSS classes for the plant state, staggered drops for different amounts of water, different sun sizes, and CSS transitions for gradual recovery.

### My clarification

I did not want Sad to be shown mainly by leaning the whole plant sideways. I asked for the wilted appearance to come from smaller drooping leaves, a thinner stem, shorter height, narrow leaf shapes, and duller color while keeping the plant centered. I also asked for a restrained but more alive garden background.

### Result and testing

Codex implemented those decisions in Version 2. I tested mood switching, repeated clicking, all three animations, and the longer Sad recovery. The visual differences and recovery worked as intended.

## Selected Exchange 3: Finding a Dead End Through Testing

After Version 2, I asked Codex to suggest a small set of edge cases for manual browser testing. Its explanation identified an important behavior:

> The current implementation does not provide an on-page way to start another check-in. It becomes a completed, one-shot experience. A new check-in requires reloading the page.

I confirmed this during my own test. The final plant and message looked good, but all controls remained disabled. I decided that the experience should not restart automatically. Instead, the user should be able to stay with the final plant and choose when to begin again.

### My revision request

> After the watering and recovery process finishes, all of the controls remain disabled... the experience feels “stuck.” The only way to start another check-in is to manually reload the browser.

I asked for a **Check in again** button and requested a plan before implementation.

### Codex's proposed state flow

Codex suggested a small state model:

```text
ready → watering → completed → reset → ready
```

It proposed using an `isComplete` variable and a `resetExperience()` function. The reset would clear the previous mood, remove the care classes, reset the buttons and message, and return the plant, water, and sun to their initial state.

### Result and final test

After Codex implemented Version 3, I manually tested the interaction across multiple cycles:

```text
Sad → Water my seed → recovery → reflective message → Check in again
Okay → Water my seed → recovery → Check in again
Great → Water my seed → recovery
```

The reset worked correctly. Each animation restarted, and no old message or mood state remained. I then saved Version 3 as the final interaction.

## Division of Work

Codex helped me translate ideas into beginner-friendly code, explain the existing implementation, propose technical approaches before revisions, and make the edits I approved.

I chose the emotional metaphor, limited the project scope, tested each version in the browser, identified the problems, removed the overlapping Stressed option, defined how each mood should look and recover, chose the repeat check-in behavior, and decided when each version was ready to save in Git.

The project improved through this repeated cycle:

```text
idea → AI-assisted prototype → my browser test → my design decision → AI-assisted revision → another test
```
