import supabase from './supabase';

export const addOrderToDb = async (order) => {
    const { data, error } = await supabase
        .from('orders')
        .insert(order)
        .select();
    return [data, error];
};
