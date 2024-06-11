import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className=" bg-slate-900 text-white py-4 text-center">
      <div className="container">
        <p className="text-xl">
          Feito Por{' '}
          <Link
            className="font-bold hover:text-blue-500"
            target="_blank"
            to="https://www.linkedin.com/in/felipe-lacerda-oliveira/"
          >
            Felipe Lacerda
          </Link>
        </p>
      </div>
    </footer>
  )
}
