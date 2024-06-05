import { Fragment, ReactElement, useContext, useEffect } from 'react'
import Head from 'next/head'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { parseCookies } from 'nookies'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'
import { GetServerSideProps } from 'next'
import { getAPIClient } from '../services/axios'
import NavBar from '@/components/NavBar'
import PrivateLayout from '@/components/layouts/PrivateLayout'

const navigation = [{name: 'Home', link_to: 'home'}, {name: 'Exercicios', link_to: 'exercise'}, {name: 'Protocolos', link_to: 'workouts'}]
const profile = ['Your Profile', 'Settings']

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const HomePage = () => {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    // api.get('/users');
  }, [])

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrivateLayout>
      {page}
    </PrivateLayout>
  )
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

//   await apiClient.get('/users')

  return {
    props: {}
  }
}