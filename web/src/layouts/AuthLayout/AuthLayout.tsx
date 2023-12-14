import Title from './Title'
import './auth.css'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 bg-[url(/img/auth-background.svg)] bg-no-repeat pt-12">
        <div className="h-[350px] w-[660px]">
          <Title />
        </div>
        {children}
      </div>
      <footer className="h-[358px] bg-acadia"></footer>
    </>
  )
}

export default AuthLayout
