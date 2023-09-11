export const userColumnsP = [

    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "Name",
      headerName: "product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.Images} alt="avatar" />
          </div>
        );
      },
    },
    {
      field: "Category",
      headerName: "Category",
      width: 230,
    },
  
    {
      field: "Price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "Quantity",
      headerName: "Stock",
      width: 160,
    },
  ];
  