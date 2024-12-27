import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './AuthPage.module.scss'

interface LoginPageProps {
  className?: string;
}


const AuthPage = ({className} : LoginPageProps ) => {



  return (
    <div className={classNames(cls.logo, {}, [className])}>
      
    </div>
  )
}
export default AuthPage