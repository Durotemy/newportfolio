
interface ChildrenProp {
    children: React.ReactNode
}

const Screen = ({ children }: ChildrenProp) => {
    return (
        <div className="px-12 py-4">
            {children}
        </div>
    )
}

export default Screen;