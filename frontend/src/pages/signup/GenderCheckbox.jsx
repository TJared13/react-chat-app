const GenderCheckbox = () => {
  return (
    <div className="flex pt-2">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-blue-500">Male</span>
                <input type='checkbox' className="checkbox border-slate-900"/>
            </label>
        </div>

        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-blue-500">Female</span>
                <input type='checkbox' className="checkbox border-slate-900"/>
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox