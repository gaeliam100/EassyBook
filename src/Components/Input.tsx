interface InputProps {
  Itype: string;
  Iplaceholder?: string;
}

const Input= ({ Itype,Iplaceholder}: InputProps) => {
    return <input 
    type={Itype} 
    placeholder={Iplaceholder} 
    className='border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out w-full'
    />;

    }
export default Input;