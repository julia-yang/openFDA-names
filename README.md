## OpenFDA - What's in my Pill?

Bit of a sequel (or should I say a SQL?) to an [earlier project](https://github.com/julia-yang/python_drug_db) in Python

## How to Run
From the openfda folder:

```
npm install
```

```
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



https://github.com/user-attachments/assets/c8135003-d0c6-4127-bffe-f377427a11c5

## Improvement Ideas
- Would be nice to search by generics, but that seems to require an extra API call. Might make more sense to add it if I ever add a database and can use SQL filters or something instead of parsing API responses.
- TypeScript does not think my lists are Type-y enough.
- The "No Results" doesn't display when I enter an invalid query, only when I refresh the page 
