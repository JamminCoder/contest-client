export default function Register(props) {
    return (
        <form onSubmit={ props.onSubmit } action={ props.action } method={ props.method } className="Form flex flex-col items-center bg-white border border-gray-400 rounded-lg w-[100%] max-w-[30em] py-10 px-2">
            { props.children }
        </form>
    );
}