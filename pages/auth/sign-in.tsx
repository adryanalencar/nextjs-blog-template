import type { NextPageContext } from "next";
import { NextSeo } from "next-seo";
import { getSession, getCsrfToken, getProviders, ClientSafeProvider } from 'next-auth/react'
import SocialLogin from "components/auth/SocialLogin";


interface SignInProps {
  session: any
  providers: ClientSafeProvider[]
  csrfToken: string | undefined
}


const SignIn = ({providers} : SignInProps) => {

  return (
    <div className="m-auto flex h-screen max-w-5xl flex-col">
      <div className="flex-col flex-grow justify-items-center items-center py-10">
        <NextSeo title="Sign In" description="Join for free" />
        <div className="flex flex-col md:flex-col justify-items-center items-center">
          <div className="flex w-full flex-col space-y-3 bg-blue-600 p-4 text-white md:w-1/2 md:p-8">
            <h1 className="text-2xl font-bold">Sign-in</h1>
            <p className="text-base">
              Use your google acount
            </p>            
          </div>
          <div className="w-full border border-gray-200 bg-white p-4 md:w-1/2 md:p-8">
            <form action="#" className="space-y-5">
              <div className="form-control">
                <input
                  type="mail"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
              </div>
              <button 
                className="inline-block w-full px-6 py-3.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="submit"
              >
                Login
              </button>
              <button className="inline-block w-full px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Create Account
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-items-center items-center w-full flex-col space-y-3  p-4 text-white md:w-1/2 md:p-8">
            {
              providers.map((provider, index) => {
                return (
                  <SocialLogin
                    key={`${provider.id}-${index}`}
                    method={provider.id}
                    provider={provider}
                  />
                )
              })
            }        
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.getInitialProps = async (context : NextPageContext) => {
  const { req, res } = context;
  const session = await getSession({ req });
  const providers = await getProviders();

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }
  
  return {
    session: session,
    providers: Object.values(providers || {}),
    csrfToken: await getCsrfToken(context),
  };
};

export default SignIn;
