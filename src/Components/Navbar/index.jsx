import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ButtonCart from '../ButtonCart';
import tw from 'tailwind-styled-components';

const ContainerLogo = tw.div`
  flex 
  items-center 
  justify-center 
  h-16 
  sm:items-stretch 
  sm:justify-start
`
const TitutloLogo = tw.h1`
  text-5xl 
  font-semibold 
  text-white 
  hidden 
  sm:block
`
const SubTituloLogo = tw.p`
  text-xl 
  font-light 
  ml-2 
  mt-5 
  text-white 
  hidden 
  sm:block
`

export default function Navbar() {

  return (
    <Disclosure as="nav" className="bg-blue-700 ">
      {({ open }) => (
        <>
          <div className="mx-auto w-full h-20 px-3 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button 
                  className="relative inline-flex items-center justify-center 
                  rounded-md p-2 bg-gray-100 text-gray-900 hover:bg-gray-700
                 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              <ContainerLogo>

                <div className="flex items-center ">
                    <TitutloLogo>MKS</TitutloLogo>
                    <SubTituloLogo>Sistemas</SubTituloLogo>
                </div>

              </ContainerLogo>


              <ButtonCart/>

            </div>
          </div>


        </>
      )}
    </Disclosure>
  )
}
