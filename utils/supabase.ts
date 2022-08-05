import { createClient, PostgrestError } from '@supabase/supabase-js';
import { Restaurant } from '../types/restaurant';

const RESTAURANTS_TABLE = 'restaurants';

export const getSupabase = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_KEY as string
  );
};

const supabase = getSupabase();

export const isPostgrestError = (error: any): error is PostgrestError => {
  return (
    'message' in error &&
    'details' in error &&
    'hint' in error &&
    'code' in error
  );
};

export const getAllRestaurants = async () => {
  try {
    const { data, error } = await supabase.from('restaurants').select('*');
    if (error) throw error;

    return data;
  } catch (e) {
    console.error(e);
    if (isPostgrestError(e)) {
      alert(e.message);
    }
  }
};

export const getTopRestaurants = async (count: number = 5) => {
  try {
    const { data, error } = await supabase.from('restaurants').select('*');
    if (error) throw error;

    data.sort((a, b) => b.grade - a.grade);
    return data.slice(0, count);
  } catch (e) {
    console.error(e);
    if (isPostgrestError(e)) {
      alert(e.message);
    }
  }
};

export const createRestaurant = async (restaurantInfo: Restaurant) => {
  try {
    const { data, error } = await supabase
      .from(RESTAURANTS_TABLE)
      .insert(restaurantInfo)
      .single();

    if (error) throw error;

    return data;
  } catch (e) {
    console.error(e);
    if (isPostgrestError(e)) {
      alert(e.message);
    }
  }
};

export const deleteRestaurantById = async (restaurantId: number) => {
  try {
    const { data, error } = await supabase
      .from(RESTAURANTS_TABLE)
      .delete()
      .eq('id', restaurantId);

    if (error) throw error;

    return data;
  } catch (e) {
    console.error(e);
    if (isPostgrestError(e)) {
      alert(e.message);
    }
  }
};
