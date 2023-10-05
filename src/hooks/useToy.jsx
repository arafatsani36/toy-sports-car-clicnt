import { useQuery } from '@tanstack/react-query';
const useToy = () => {

        const {
            data: toys = [],
            isLoading: loading,
            refetch,
        } = useQuery({
            queryKey: ['toys'],
            queryFn: async () => {
                const res = await fetch('https://toy-sports-car-server-nine.vercel.app/toys');
                return res.json();
              },
        })

        return [toys, loading, refetch];

};

export default useToy;