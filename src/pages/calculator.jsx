const reactive = [
    { name: 'Reactivo 1', idForm: 'reactive1', placeholder: 'Reactivo 1' },
    { name: 'Reactivo 2', idForm: 'reactive2', placeholder: 'Reactivo 2' },
]
const product =[
    { name: 'Producto 1', idForm: 'product1', placeholder: 'Producto 1' },
    { name: 'Producto 2', idForm: 'product2', placeholder: 'Producto 2' },
]

export default function Calculator() {
    return (
        <div className="py-10">
            <header>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Calculadora Estequiométrica</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div>
                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-7">
                                <div  className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                    <dt className="truncate text-sm font-medium text-gray-500">Reactivo 1</dt>
                                    <input
                                        type="text"
                                        name='reactive1'
                                        id='reactive1'
                                        className="block w-full border-0 border-b border-transparent bg-gray-50 text-xl focus:border-indigo-600 focus:ring-0 sm:text-xl"
                                        placeholder='Reactivo 1'
                                    />
                                </div>
                                <div  className="overflow-hidden text-center rounded-lg text-3xl bg-white px-5 py-8 ">
                                    +
                                </div>
                                <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                    <dt className="truncate text-sm font-medium text-gray-500">Reactivo 2</dt>
                                    <input
                                        type="text"
                                        name='reactive1'
                                        id='reactive1'
                                        className="block w-full border-0 border-b border-transparent bg-gray-50 text-xl focus:border-indigo-600 focus:ring-0 sm:text-xl"
                                        placeholder='Reactivo 2'
                                    />
                                </div>
                                <div  className="overflow-hidden text-center rounded-lg text-3xl bg-white px-5 py-8 ">
                                    →
                                </div>
                                <div  className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                    <dt className="truncate text-sm font-medium text-gray-500">Producto 1</dt>
                                    <input
                                        type="text"
                                        name='reactive1'
                                        id='reactive1'
                                        className="block w-full border-0 border-b border-transparent bg-gray-50 text-xl focus:border-indigo-600 focus:ring-0 sm:text-xl"
                                        placeholder='Producto 1'
                                    />
                                </div>
                                <div  className="overflow-hidden text-center rounded-lg text-3xl bg-white px-5 py-8 ">
                                    +
                                </div>
                                <div  className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                    <dt className="truncate text-sm font-medium text-gray-500">Producto 2</dt>
                                    <input
                                        type="text"
                                        name='reactive1'
                                        id='reactive1'
                                        className="block w-full border-0 border-b border-transparent bg-gray-50 text-xl focus:border-indigo-600 focus:ring-0 sm:text-xl"
                                        placeholder='Producto 2'
                                    />
                                </div>
                        </dl>
                    </div>
                </div>
            </main>
        </div>
    );
}


