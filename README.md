# Mood Seed

## 1. Project Overview

Mood Seed is a simple emotional check-in tool that runs in your web browser.

My original thought for this project was:

> When someone chooses how they are feeling and waters their seed, the experience should show that every feeling deserves care and that a small act of care can support growth.

The seed or plant stands for the user. Water and sunlight represent care and support. The first version had four mood options:

- Great
- Okay
- Sad
- Stressed

Users could pick a mood, click **Water my seed**, watch water fall, and see the seed grow into a sprout with a supportive message.

## 2. How to Run

You do not need to install anything or use extra frameworks to run this project.

1. Download or clone this repository.
2. Open `index.html` in any web browser.
3. Choose Great, Okay, or Sad.
4. Click **Water my seed**.
5. Watch the plant get water and sunlight and slowly recover.
6. Read the reflective message.
7. Click **Check in again** to start another mood check-in.

This project only uses:

- HTML
- CSS
- JavaScript

## 3. AI Tool Used

I used OpenAI Codex as my AI coding helper.

I asked Codex to:

- turn my interaction ideas into simple HTML, CSS, and JavaScript code for beginners,
- look at my existing code,
- explain how the interface works,
- suggest ways I could implement features before I made some revisions,
- and help edit code after I made my own design choices.

I tested everything myself in the browser, and I made all the main design decisions based on what I saw during testing. I did not write all the code by myself.

A more detailed record of selected prompt-and-response exchanges, testing decisions, and related Git commits is available in [PROCESS.md](PROCESS.md).

## 4. Selected AI Prompts

Here are a few important prompts I used during development, not every single prompt.

### Prompt 1 — Initial prototype

> I want to build the first version of my Mood Seed project. My initial idea is to create a small interactive browser experience based on the user's mood... The seed represents the user, and watering the seed represents giving yourself care.

This prompt helped set up the first prototype. I kept Version 1 simple on purpose so I could test the basic idea first.

### Prompt 2 — Revising the mood experience after testing

I shared my test result:

> I tested Version 1 myself, and the basic interaction works, but it does not fully match my intention. Okay, Sad, and Stressed feel almost the same during the watering interaction... I expected the selected mood to affect the visual experience itself, not just the text.

Then I asked for these changes:

- Great starts healthy and only needs a small amount of water and sun.
- Okay needs more care.
- Sad starts looking wilted and gets slow, steady care.
- Remove Stressed because I thought it overlapped too much with Sad.
- All moods end at about the same healthy plant state.

I asked Codex to give me a plan for these changes before I updated the code.

### Prompt 3 — Improving the completed-state interaction

I told Codex:

> After the watering and recovery process finishes, all of the controls remain disabled... the experience feels "stuck." The only way to start another check-in is to manually reload the browser.

I decided to add the **Check in again** button instead of automatically restarting the experience. I wanted users to decide when they are ready to try another check-in.

## 5. Testing and Iteration

I built and tested this project in three main stages.

### Version 1 — Testing the basic idea

I tested all four moods inside my browser.

**Expected:** I wanted each mood to create a different feeling and visual animation.

**Actual:** Okay, Sad, and Stressed looked almost the same while watering. The only real difference was the supportive text message. The watering animation also felt too fast; it did not feel like a meaningful moment of self-care.

**Change I made:** I decided the mood should change the plant's starting look, how much water and sunlight it gets, and how long recovery takes. I also removed Stressed because I thought it was too similar to Sad.

### Version 2 — Making care visible

I redesigned the project with three different starting plant states:

- **Great:** The plant is already healthy; it just needs a little extra care.
- **Okay:** The plant has less energy and needs more water and sunlight.
- **Sad:** The plant looks wilted at the start and needs slow, ongoing care.

All three moods end at roughly the same healthy plant. I did this on purpose: a plant that struggles needs more care, but it should not end up worse than the others.

I also changed the background to look more like a green garden to fit the theme of care, growth, and recovery.

After testing Version 2, the mood differences and recovery animations worked the way I hoped. But I found one big problem: once the animation finished, there was no way to start over unless I refreshed the whole page.

### Version 3 — Improving the interaction flow

I added the **Check in again** button that appears after the plant finishes recovering. The plant image and message stay on screen, and the experience does not restart automatically. Users choose when they want to check in again.

I manually tested the interaction across multiple cycles:

```text
Sad → recovery → Check in again
Okay → recovery → Check in again
Great → recovery
```

The reset function worked well. Animations start properly, and old mood states or messages do not stay on the screen. I also rewrote the ending messages so they connect better to the plant metaphor through ideas about patience, care, and growth.

## 6. Reflection

The final version aligns better with my original idea than Version 1. Now, as a user opening this page, I can clearly identify how I feel in the moment, water the seed based on my mood, and receive a sense of care. Looking back, my goal was not simply to make a plant grow, but to use watering and growth to symbolize self-care and stress relief. Although Version 1 worked technically, when I tested “Great”, “Okay”, “Sad” and “Stressed”, I found “Okay”, “Sad” and “Stressed” had nearly identical visual experiences, differentiated only by text. The watering animation also ran too fast to create a meaningful moment of stress relief. This made me realize a functional interaction is not always a meaningful one, and it might have redundant steps and designs. I revised the design: the “Great” state starts with a healthy plant needing little care; “Okay” needs more water and sunlight; “Sad” begins visibly wilted and requires slower, continuous care. I removed “Stressed” since I believed it overlapped too much with “Sad”. While testing Version 2, I found another problem: users could not restart the experience without refreshing the page. A user’s mood might change right after watering the seed, and they may want to check in again. This motivated me to add the “Check in again” button in Version 3.

I gained valuable insights from these testing cycles. Codex helped translate my ideas into beginner-friendly HTML, CSS and JavaScript, troubleshoot code issues, and propose technical plans before revisions. Still, the development required repeated edits and iterations. Codex only follows my instructions and generates pages for me to examine. I had to take the lead to decide what the user experience should feel like and how the final product should look, including ongoing testing and direction adjustments. Finally, Mood Seed is just a simple symbolic interactive work. Different people may interpret the connection between mood and plant states differently. This small demo cannot fully represent the complexity of human emotions, and evaluating users’ feelings with only three simple labels remains incomplete.
