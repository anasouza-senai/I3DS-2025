import styles from './RodaPe.module.css'

const RodaPe = ({children}) => {
  return (
    <footer>
        <p>
            Feito com 💜 por <a href='https://github.com'>{children}</a>
        </p>
    </footer>
  )
}

export default RodaPe