# Week 9 Planning – Testing and Refinement

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Week:** 9 | 9 March 2026

---

## Overview

Week 9 is all about testing and tidying up. The main features are done from previous weeks so this week is making sure everything works properly, fixing things that are broken and cleaning up the code a bit before the final week.

The plan is to go through each part of the application, write test cases, run them and note down what happens. I also want to clean up the JavaScript and make sure the code is readable, not just functional.

---

## Goals for This Week

- Write and run test cases for all the main features
- Fix any bugs that come up during testing
- Test the site on different screen sizes to check it is responsive
- Tidy up JavaScript – remove leftover console logs, clean up variable names
- Make sure the basket still works after a page refresh (localStorage)
- Check checkout form validation handles edge cases properly

---

## Daily Plan

### Monday – Write Test Cases
Write out all the test cases before running anything. Covers the product listing page, product detail page, basket and checkout form. Better to plan them first so nothing gets missed.

### Tuesday – Run Functional Tests
Go through each test case and record what actually happens. If something fails, note it down and move on. No fixing mid-testing as it makes it hard to track what changed.

### Wednesday – Fix Bugs Found
Work through everything that failed or behaved unexpectedly. Most will probably be small things like a missing check or a typo. Each fix gets its own commit so the Git history stays clear.

### Thursday – Cross-Device Testing and Code Tidy
Check the site on mobile and tablet using Chrome DevTools. Also go through the JavaScript files and clean up anything messy – mostly removing console.log statements left in from development.

### Friday – Review and Update README
Review test results and update the README. Make sure the setup instructions are accurate and that anyone cloning the repo can get it running without any issues.

---

## Planned Test Cases

| Test ID | Description | Expected Result | Status |
|---------|-------------|-----------------|--------|
| TC-01 | Product listing page loads all products | All products render correctly from data file | Pending |
| TC-02 | Category filter shows correct products | Only products matching selected category appear | Pending |
| TC-03 | Search bar filters by keyword | Products matching keyword shown, others hidden | Pending |
| TC-04 | Sort by price low to high | Products reorder with lowest price first | Pending |
| TC-05 | Click product card goes to detail page | Correct product details load on detail page | Pending |
| TC-06 | Add to basket from detail page | Item appears in basket with correct details | Pending |
| TC-07 | Update item quantity in basket | Quantity changes and total recalculates | Pending |
| TC-08 | Remove item from basket | Item removed and total updates correctly | Pending |
| TC-09 | Basket persists after page refresh | Basket items still showing after F5 | Pending |
| TC-10 | Checkout form – empty submission | Validation errors shown for required fields | Pending |
| TC-11 | Checkout form – invalid email | Error message shown for bad email format | Pending |
| TC-12 | Checkout form – valid submission | Confirmation message shown, basket cleared | Pending |
| TC-13 | Responsive layout on mobile (375px) | No overflow, layout adjusts to single column | Pending |
| TC-14 | Responsive layout on tablet (768px) | Grid adjusts to two columns, nav still usable | Pending |

---

## Known Issues from Previous Weeks

- Basket count badge in the navbar was not always updating immediately after adding an item – needs checking
- Product detail page had a missing URL parameter issue if accessed directly – needs testing
- Some spacing looked a bit off around the product cards on smaller screens

---

## Risks

| Risk | Likelihood | What I Will Do |
|------|------------|----------------|
| More bugs than expected from testing | Medium | Prioritise by importance, leave minor ones for Week 10 |
| Not enough time to test everything | Low | Focus on core features first (basket, checkout) |
| Mobile layout has bigger issues than expected | Low | Use DevTools to diagnose and patch CSS |

---

## Git Commit Plan

At least one commit per day with clear messages:

```
week9: add test cases document
week9: fix basket badge update issue
week9: refactor product filter function
week9: cross-device testing done, fix mobile padding
week9: update README with setup instructions
```

---

## Additional Notes

Week 10 is the final week and is for finishing off and writing the report, so the application needs to be in a stable, working state by end of this week. No new features are being added – the focus is making what is already there work correctly and be reasonably tidy.

If testing goes well and there is spare time, I might look at small UI improvements like button hover states, but that is not a priority right now.
