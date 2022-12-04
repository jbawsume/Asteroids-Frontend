export const handleCheckMinerNameExists = ( { minerItems, minerName } ) =>
{
    return minerItems.find( item => item.name === minerName );
};