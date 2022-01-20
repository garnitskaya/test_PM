export const serviceAPI = () => {

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }
        return await res.json();
    }

    const getAllSummaries = async (photo, currentPage) => {
        const res = await getResource(`http://135.181.30.244:27007/api/summaries/?page=${currentPage}&photo=${photo}`);
        console.log(res.results.map(transformPerson))
        return await res.results.map(transformPerson);
    }

    const getAllData = async (photo, currentPage) => {
        const res = await getResource(`http://135.181.30.244:27007/api/summaries/?page=${currentPage}&photo=${photo}`);
        return await res;
    }

    const transformPerson = (person) => {
        return {
            id: person.id,
            desiredposition: person.desiredposition[0].position.split(',')[0],
            name: person.last_name ? person.last_name : 'Не указано',
            age: person.birthday,
            workexperience: person.workexperience,
            updated: person.updated_at,
            visibility: person.visibility,
            photo: person.photo
        }
    }


    return { getAllSummaries, getAllData };
}