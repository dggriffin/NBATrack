Ext.define('NBAtrack.model.GameBoxModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'clock',
            mapping: '@clock'
        },
        {
            name: 'quarter',
            mapping: '@quarter'
        },
        {
            name: 'duration',
            mapping: '@duration'
        },
        {
            name: 'attendance',
            mapping: '@attendance'
        },
        {
            name: 'home_id',
            mapping: '@home_team'

        },
        {
            name: 'home_points',
            mapping: 'team:first@points'

        },
        {
            name: 'home_points_Q1',
            mapping: 'team:first scoring quarter[number=1]@points'

        },
        {
            name: 'home_points_Q2',
            mapping: 'team:first scoring quarter[number=2]@points'

        },
        {
            name: 'home_points_Q3',
            mapping: 'team:first scoring quarter[number=3]@points'

        },
        {
            name: 'home_points_Q4',
            mapping: 'team:first scoring quarter[number=4]@points'

        },
        {
            name: 'home_leaders_points',
            mapping: 'team:first leaders points'

        }, {
            name: 'home_leaders_rebounds',
            mapping: 'team:first leaders rebounds'

        }, {
            name: 'home_leaders_assists',
            mapping: 'team:first leaders assists'

        }, {
            name: 'away_id',
            mapping: '@away_team'

        },
        {
            name: 'away_points',
            mapping: 'team:last@points'

        },
        {
            name: 'away_points_Q1',
            mapping: 'team:last scoring quarter[number=1]@points'

        },
        {
            name: 'away_points_Q2',
            mapping: 'team:last scoring quarter[number=2]@points'

        },
        {
            name: 'away_points_Q3',
            mapping: 'team:last scoring quarter[number=3]@points'

        },
        {
            name: 'away_points_Q4',
            mapping: 'team:last scoring quarter[number=4]@points'

        },
        {
            name: 'away_leaders_points',
            mapping: 'team:last leaders points'

        }, {
            name: 'away_leaders_rebounds',
            mapping: 'team:last leaders rebounds'

        }, {
            name: 'away_leaders_assists',
            mapping: 'team:last leaders assists'

        }

],
});