import { useState, useEffect } from 'react';
import { MOCK_BACKEND_DATA } from '../constants/content';

/**
 * Simulates fetching data from a backend with a delay.
 * In a real app, this would use fetch() or axios.
 */
export const useBackendAssets = () => {
    const [assets, setAssets] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssets = async () => {
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 800));
                setAssets(MOCK_BACKEND_DATA);
            } catch (err) {
                setError("Failed to fetch assets");
            } finally {
                setLoading(false);
            }
        };

        fetchAssets();
    }, []);

    return { assets, loading, error };
};
