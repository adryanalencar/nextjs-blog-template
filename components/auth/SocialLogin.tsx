import { ClientSafeProvider, signIn } from 'next-auth/react'
import Image from 'next/image'

import InstagramIcon from 'assets/icons/instagram.svg'
import GithubIcon from 'assets/icons/github.svg'
import FacebookIcon from 'assets/icons/facebook.svg'
import GoogleIcon from 'assets/icons/google.svg'


type SocialLoginProps = {
    method: string,
    provider: ClientSafeProvider
}


function getSocialIcon(method : string){
    if(method == "google"){
        return GoogleIcon 
    }

    if(method == "facebook"){
        return FacebookIcon
    }

    if(method == "instagram"){
        return InstagramIcon
    }

    if(method == "github"){
        return GithubIcon
    }

    return GoogleIcon
}

const SocialLogin = ({method, provider} : SocialLoginProps) => {

    const socialIcon = getSocialIcon(method) as {
        src: string,
        width: number,
        heigth: number
    }
    
    return (
        <button 
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className={`social-button inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light btn-${method}`}
            onClick={() => {
                signIn(provider.id)
            }}
        >
            <Image src={socialIcon.src} height={16} width={16} alt={method}/>
        </button>
    );
};
  
  export default SocialLogin;
  