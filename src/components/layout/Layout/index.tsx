import { FC, ReactNode } from "react"
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "../Main";

type Props = {
    children: ReactNode,
    title: string,
    className?: string
}

const Layout: FC<Props> = ({title, className, children}) => {
    return ( 
    <>
    < Header />
    <Main title={title} className={className}>
                {children}
            </Main>
    <Footer />
     </>
    );
    
}
  
export { Layout };