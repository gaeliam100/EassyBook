
interface ButtonSocialProps {
children: React.ReactNode;
}
const ButtonSocial = ({ children, ...props }:ButtonSocialProps) => {
    return (
        <button className="className='p-2 rounded-xl flex gap-x-2 shadow-sm  px-14 py-4 border-2 border-gray-100'" {...props}>{children}</button>
    );
    }
export default ButtonSocial;