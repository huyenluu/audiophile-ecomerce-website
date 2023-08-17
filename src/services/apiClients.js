import supabase from './supabase';

export const addClientToDb = async (client) => {
    const { data, error } = await supabase
        .from('clients')
        .insert(client)
        .select();

    return [data, error];
};
