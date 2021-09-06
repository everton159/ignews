import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJS } from '../../services/stripe-js';
import style from './styles.module.scss';

interface SubscribeButtonProps{
  priceId:string;
}
export function SubscribeButton({priceId}:SubscribeButtonProps){
  const[session] =useSession();
  async function  handleSubscribe(){
      if(!session){
        signIn('github')
        return;
      }

      try{ 
        const response =  await api.post('/subscribe')
        console.log(response);
        const {sessionId} = response.data;
        const stripe = await getStripeJS()

       await stripe.redirectToCheckout({sessionId})
      }catch(err){
        alert(err.message);
      }
  }
  return(
    <button
      type="button"
      className={style.subscribeButton}
      onClick={handleSubscribe}
      >Subscribe now</button>
  )

}