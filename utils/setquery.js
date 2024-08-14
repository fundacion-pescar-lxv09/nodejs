export const setQuery = ({ params, body, query}) => {
    const queryParams = query && [ 
        {   
            price:{ $gte: query?.minPrice },
            price:{ $lte: query?.maxPrice }
        },
        {
            "package.cost": {$gte: query?.minCost},
            "package.cost": {$lte: query?.maxCost}
        }
    ]
    const bodyParams = body && [
        { "payment.currency": body?.currency },
        { 
            "package.days":{$gte:body?.days}, 
            "package.nights":{$gte:body?.nights} 
        },
        { 
            travelDate: {$lte: body?.maxDate}, 
            travelDate: {$gte: body?.minDate} 
        }
    ]
    const pathParams = params && [
        { "location.country": params?.countryId },
        { "location.city": params?.cityId },
        { "lodging.pension.type": params?.pensionId }
    ]
    const reQuery = {
        $or: [
            ...queryParams,
            ...bodyParams,
            ...pathParams    
        ]
    }
    return reQuery
}