# DigitalMedicalEvidence
This repository contains a solution for issuing and sending verifiable credentials for a digital medical evidence

## Inspiration

Originally I was inspired for this solution by initiatives of the "Bundesdruckerei" to store official documents such as identity card, parking pass and student pass or driver licence in a personal wallet. This is based on technical standards in the realm of self sovereign identity.
Impact

There is currently no opportunity for a person or citizen respectively to store and proof its current Corona infection status at any time and place. This may be very important for persons who are working at hospitals, in the outpatient care area or in all social occupations in general. There it will be very helpful to know who hasn't been infected as yet ("negative diagnosis"), who is currently infected ("positive diagnosis"), or was already infected in the past ("immune"). For this a personal belonging information might be helpful which a person is able to carry permanently with.

Moreover it will be also possible to store each medical evidence record to a blockchain / distributed ledger from where it can be processed by any other party for statistical or administrative purposes. The information should be anonymized and hence only information such as test result, date, zip code, age shall be stored on the ledger.

**Features:**

* tamper proof
* The information is under the control of the owner, i. e. the user
* It reduces a huge load of bureacracy, i. e. it delivers a high degree of automation

## Prerequisites:

* One responsible authority or institute (Robert-Koch-Institut?) which is eligible to issue the (digital) evidence
* The authority / institute is able to integrate the digital process as described above
* The user has to be obliged to download and use a digital identity wallet such as uPort or Jolocom

## What it does

A public authority, health office or institute creates a digital certificate based on the result of a conducted Corona test.
This certificate will be issued to the belonging user / citizen the test was performed for.
Successively the user will be able to store this digital document on an identiy wallet such as uPort or Jolocom, which he has to intall prior to this activity.
It is in addition conceivable that a positive medical evidence changes after (let's assume) four weeks automatically to the status 'immune' in case no complications occured during his infection.
![Alt text](/src/images/Digital_Evidence_Ablauf_Diagramm.png?raw=true "Process Flow Chart")

## Digital evidence

It contains the Corona health status of the user / citizen (negative, positive, immune)
an expiry date.

## How I built it

It was built with
* JavaScript
* jQuery
* NodeJS
* Express
* 3rd party libraries (uPort)
* Self-Sovereign-Identity
* Decentralized Identity (DID)
* Verifiable Claims

## Accomplishments

It's a relative simple solution that was implemented based on official technical standards.
What I learned
How versatile the use cases are in the context

## What's next for Digital Evidence

Building services on top such as
* personalized health information for positive tested persons (depending on the medical evidence)
* can be used as a proof of health before starting an occupation in social or medical care professions
* tracking (based on the mobile carrier cell) please in order to identify infection clusters
* in case of ongoing and repeated curfews. If a person is able to proof that he is already immune he may be allowed to behave liberately in the public    (what may admittedly incentivize wrong behavior such as self infection)


