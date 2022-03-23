#!/usr/bin/env node
import fetch from "node-fetch";

const url = "https://serve.onegraph.com/graphql?app_id=06238984-0a96-4774-95ad-d7b654c980c5";

const args = process.argv.slice(2)
const doc_id = "201acfa1-d79b-4c17-9874-c992e7aea196"
const docId = {doc_id}
// const variables = JSON.stringify(variables: [`${user}`])

console.log(`Hello ${args[0]}`)

fetchUserData(args[0], docId)

async function fetchUserData(user = {}, doc) {
  doc.variables = {user}
  console.log(doc)
  const options = {
    method:"POST",
    body: JSON.stringify(doc),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);
  console.log(response.data.gitHub.user)
  return response;
}