export default function CenterPage(props) {
    return (
        <div className='grid place-items-center h-[90vh] px-2'>
            { props.children }
        </div>
    );
}