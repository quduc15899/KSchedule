
const url = 'http://schedulekma.herokuapp.com/api/kma?username=';
const url2 =  '&password=';
const getData = (maSV,password) => (
   

    fetch( `${url}${maSV}${url2}${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    })
        .then(res => res.json())
);
module.exports = getData;