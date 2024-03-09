
import {EasybookLogo,GoogleLogo,FacebookLogo} from '../Components/Icons';
import ButtonSocial from '../Components/ButtonSocial';
import Input from '../Components/Input';
const LoginPage = () => {
    return (
        <div className="w-full flex  bg-blue-200 h-screen">
            <section id="section-form" className="w-full h-full bg-[#ffffff] flex justify-center py-8">
                <section className='flex flex-col max-w-lg h-full'>
                <header id="form-header" className='flex flex-col justify-between h-full'>
                    <div className='flex items-center'>
                        <EasybookLogo />
                        <span><p className='text-xl'>EassyBook</p></span>
                    </div>
                    <section className=''>
                    <h1 className="text-4xl text-black font-bold">Ingresa a tu cuenta</h1>
                    <h6 className='text-base text-gray-600 py-2'>¡Bienvenido de vuelta! selecciona una opción para ingresar:</h6>
                    </section>
                    <section id="social Buttons" className='flex justify-between'>
                        <ButtonSocial >
                            <GoogleLogo />
                            Google
                        </ButtonSocial>
                        <ButtonSocial >
                            <FacebookLogo />
                            Facebook    
                        </ButtonSocial>
                    </section>
                    <div className="flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-600">o continua con tu identificador</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                     </div>

                </header>
                <section className=' w-full h-full'>
                <form className='flex flex-col gap-y-6 my-4'>
                    <Input Iplaceholder='Identificador' Itype='text' />
                    <Input Iplaceholder='Contraseña' Itype='password'/>
                <div id='options' className='flex justify-between'>
                <div className='flex gap-2'>
                    <input type="checkbox" name="remember" id=""/>
                    <label htmlFor="remember">Recuerdame</label>
                </div>
                <a href="">¿Olivdaste la contraseña?</a>
                </div>
                <button className='bg-[#3f5ad8] w-full text-white py-3 rounded-md'>Ingresar</button>
                </form>
                <section className='flex justify-center'>
                    <p>¿No tienes una cuenta? <a href="">Crear una cuenta</a></p>
                    </section>
                </section>
                </section>
            </section>
            <section id="section-slider" className="bg-[#3f5ad8] w-full h-full">

            </section>
        </div>
    );
}
export default LoginPage;