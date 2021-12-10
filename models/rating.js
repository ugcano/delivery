const db = require('../config/config');

const Rating = {};

Rating.getAll = () => {
    const sql = `
    SELECT 
        *
    FROM
        rating
    `;

    return db.manyOrNone(sql);
}

Rating.create = (rating) => {
    const sql = `
    INSERT INTO
        rating(
            id_user,
            rating,
            created_at,
            updated_at
        )
    VALUES($1, $2, $3, $4) RETURNING id
    `;
    return db.oneOrNone(sql, [
        rating.id_user,
        rating.rating,
        new Date(),
        new Date()
    ]);
}

Rating.update = (id_user, rating) => {
    const sql = `
    UPDATE
        rating
    SET
        rating = $2,
        updated_at = $3
    WHERE
        id_user = $1
    `;

    return db.none(sql, [
        id_user,
        rating,
        new Date()
    ]);
}

module.exports = Rating;