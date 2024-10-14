export default function InfoSection() {
    return (
        <section className="flex flex-row justify-center items-center w-full py-16 md:py-24 lg:py-32">

            <div className="flex flex-col gap-2 max-w-[500px]">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Deploy in Days</h3>
                <p className="text-gray-400">Turn your ideas into real applications quickly. Our AI-driven platform leverages prompts to automate the development process, enabling you to create robust applications in a fraction of the time.</p>
            </div>
        </section>
    )
}