import URL from "./url"

const cuponURL = URL + '/sale/send'
const orderURL = URL + '/order/send'

export const fetchCuponSend = (phone) => {
   fetch(cuponURL, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(phone)
   })
      .then(resp => resp.json())
      .then(data => console.log('Request sent', data))
      .catch(error => console.error('Error: ', error))
}

export const fetchOrderSend = (phone) => {
   fetch(orderURL, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(phone)
   })
      .then(resp => resp.json())
      .then(data => console.log('Request sent', data))
      .catch(error => console.error('Error: ', error))
}