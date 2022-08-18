# README #

### Prerequisite ###

Tests were written using Node v16, and you will need Google Chrome installed

### Getting Started ###

##### Installing from the Zip File

Make sure you have the zip packaged downloaded, and then unzip the package
Once complete open up your terminal of choice and navigate to the directory.
You will then want to run `npm install` to get all the appropriate packages set up.

##### Installing from the Github Repo

If you plan to use the Github repo either clone from your terminal or Git GUI tool
From the terminal you will then need to navigate to the directory.
Once in the directory run `npm install` to get the appropriate packages set up.

### Running Tests ###

There's a few different ways to run the Cypress tests: command line, Cypress Tool, or Github Actions

##### Command Line

From the root of the test folder simply run `npm run cypress:run`

##### Cypress Tool

From the root of the test folder run `npm run cypress:open`
Once the GUI has loaded click on 'E2E Testing`
Next select 'Chrome', then select 'Start E2E Testing in Chrome`
A local Cypress Dashboard will open in Chrome and how you the available specs to run
Select `newUserCheckout`

##### Github Action
From the Repo select 'Actions' from the top row of tabs
Then select `Run Cypress Tests` in the left rail under 'All Workflows'
There will be a button called 'Run Workflow', click that to show the dropdown
Click 'Run Workflow'
Once this is done you will see a new entry in the workflow history. You can click into it to watch them execute or wait for the status to update

### Approach to Task ###

I had worked with Cypress a few years ago so I had some slight familiarity with it, but a lot changed so it took a few to get back into Cypress' workflow style. Once there, it was familiar territory and a lot of time was spent getting the initial prep work laid out with the `Page Objects`.

The biggest hurdle to getting the task completed was handling generating a new user and keeping the state. I had a feeling the site stored email information despite being a practice space and I quickly learned this was true. I opted to expand the email requirement by including the time with the email address as to ensure I always had a unique email for use. I relied on `moments.js` to easily generate a `YYYYMMDD-HHMMSS` for appending to the email. Once that was done I realized I needed a password too, but I didn't wanted to just hardcode one in, so I went with generating a small random string.

This is when I was reminded that Cypress does not preserve the state between tests and describe blocks. I recalled at one point being able to work around this, but it seems the method has since been deprecated. I learned of the new `session` API they had developed and after some time got that into a resuable helper state to more quickly handle logging back in. I didn't love the idea of writing the generated email and password to the environment variables at time of call and really would have preferred doing this at point of run. I know WebdriverIO offers run level command set up and quickly checked if Cypress offered the same, and they did with [before run API](https://docs.cypress.io/api/plugins/before-run-api). However this continued to pose problems because while this works for `cypress run`, it will not for `cypress open`. The API spec notes that when using `open` it will execute at that specific moment, and thus you will end up with an emaill address that has been used before.

Ultimately I ended up putting these into a single test file. I was not thrilled with the idea of relying a singular spec file for the tests, as it creates a whole mess of dependency problems. In practice I'd decouple creating a new account from a checkout flow, but in reading the task requirements I'm interpreting it to be wanting this new account to be the one executing the checkout.
