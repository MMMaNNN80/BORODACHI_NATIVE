

const partner_bearer = `Bearer x2tpc4sh6432gjw2tcr2`
const company_id = `525044`
const accept = `application/vnd.api.v2+json`
const headers = {headers:{
  'Authorization': partner_bearer
  ,'Accept': accept
  ,'Connection':'keep-alive'
  ,'Content-Type':'application/json'
}}

export const  getData =  async (param) => {
     let method
     let url
    if(param.type.includes('STAFF')) {url= `https://api.yclients.com/api/v1/book_staff/${company_id}`; method='GET'}
    if(param.type.includes('FREETIME')) {url= `https://api.yclients.com/api/v1/book_times/${company_id}/${param.staff_id}/${param.date}`; method='GET'}
    if(param.type.includes('SERV')) {url= `https://api.yclients.com/api/v1/book_services/${company_id}`; method='GET'}

 return await  fetch(url,
  { method:method,mode:'cors' ,...headers
  }
) .then(response =>  response.json())
  .catch(error => {
  console.error(error)}) 

}

